import React from 'react'
import { graphql, gql } from 'react-apollo'
import { browserHistory } from "react-router";
import CircularProgress from 'material-ui/CircularProgress';

class CreateUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      apollo: props.apollo,
      auth0: props.auth0,
      data: props.data,
    }

  }


  render () {

const { loading } = this.props.data;

    if (loading) {
    return (  <div className='w-100 pa4 flex justify-center'>
                  <CircularProgress size={80} thickness={5} />
              </div>);
    }

 if (this.props.data.user || window.localStorage.getItem('auth0IdToken') === null) {
   console.warn('not a new user or already logged in')
   browserHistory.push('/');

 }

    return (
      <div className='w-100 pa4 flex justify-center'>


        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value='N/A'
            placeholder='Email'
            onChange={(e) => this.setState({emailAddress: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
//            value={this.state.name}
            value={this.state.auth0.appProfile.user}
            placeholder='Name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
        <div>

      </div>


          <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.createUser}>Sign up</button>

        </div>
      </div>
    )
  }

  createUser = () => {
    const variables = {
      idToken: this.state.auth0.idToken,
      name: this.state.auth0.appProfile.user,
//        idToken: props.auth0.idToken,
//        name: props.auth0.appProfile.screen_name,
    }
    console.log("vars " + variables.name);
    console.log("vars " + variables.idToken);
    console.log("vars " + variables);
    console.log("vars " + variables);

    this.props.createUser({ variables })
      .then((response) => {
      //    this.props.history.replace('/')
          //TODO PLACE CREATED ACTION HERE
          browserHistory.push('/');
      }).catch((e) => {
        console.error(e)
        //TODO PLACE CREATED FAILED ACTION HERE
        //TODO send to error page?
    //    this.props.history.replace('/')
      browserHistory.push('/error');
      })
  }
}

const createUser = gql`
  mutation ($idToken: String!, $name: String! ){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name ) {
      id
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: {fetchPolicy: 'network-only'}})(CreateUser)
)
