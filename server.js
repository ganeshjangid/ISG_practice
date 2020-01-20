const express=require('express');
const app=new express();
const port=process.env.PORT || 9856;
const express_graphql=require('express-graphql');
const {buildSchema} =require('graphql');
//console.log(port);

// GraphQL schema

const schema=buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root={
  message:()=>'Hello World'
};

app.use('/graphql',express_graphql({
  schema:schema,
  rootValue:root,
  graphql:true
}));

app.listen(port,()=> console.log(`this server is running on PORT ${port} ...`));