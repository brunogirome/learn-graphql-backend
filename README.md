# Learning GRAPHQL on backend

## Thanks to Rocketseat

- Link to the video: <https://www.youtube.com/watch?v=oD8GqurXZ-0>

To start the server:

```bash
    node src/server.js
```

**Note:** Using a mongodb dockerimage on this project at "mongodb://localhost:27017/graphqlnode"

---

Commands to run in Playgrond:

**Querys:**

General search:

```graphql
query {
    users {
        id
        name
        email
    }
}
```

By id:

```graphql
query {
    user(id:"userId")
}
```

**Mutations:**

Creating a User:

```graphql
    mutation {
        createUser( name:"userName", email: "userEmail" ) { id } # Returns the user id
    }
```
