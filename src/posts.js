import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import { Filter, SimpleList, Responsive } from 'admin-on-rest';


export const PostList = (props) => (
  <List {...props} filters={<PostFilter />}>
    <SimpleList>
      <TextField source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name"/>
      </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </SimpleList>
  </List>
);

export const ResponsivePostList = (props) => (
    <List {...props}  filters={<PostFilter />}>
      <Responsive
        small={
          <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date().toLocaleDateString()}
          />
        }
        medium={
          <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
          </Datagrid>
        }
      />
    </List>
);

// The tutorial seems to think a post item from typicode has record.views, and record.published_at, but it does not
// curl http://jsonplaceholder.typicode.com/posts/2 and see..
// as a result this example will print out 'undefined' for views and published..
export const SimplePostList = (props) => (
    <List {...props}>
    <SimpleList
      primaryText={record => record.title}
      secondaryText={record => `${record.views} views`}
      tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
    />
    </List>
);

const PostTitle = ({record}) => {
  return <span>Post {record}? `"${record.title}"` : ''}</span>
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput lable="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);

export const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
