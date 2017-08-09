// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

import authClient from './authClient';
import Dashboard from './dashboard';
import { SimplePostList, ResponsivePostList, PostList, PostEdit, PostCreate} from './posts';
import { UserList } from './users';
import myApiRestClient from './restClient';

// an Admin component can have one or more Resource compoents
const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={ResponsivePostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

//Dashboard version
const AppDash = () => (
  <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>

  </Admin>
);
export default App;
