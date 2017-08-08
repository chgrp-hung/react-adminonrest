// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

import Dashboard from './dashboard';
import { PostList, PostEdit, PostCreate} from './posts';
import { UserList } from './users';

// an Admin component can have one or more Resource compoents
const AppOldListVersion = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);


const App = () => (
  <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>

  </Admin>
);
export default App;
