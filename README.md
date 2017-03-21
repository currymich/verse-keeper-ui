# Verse Keeper UI
Angular/Node/Express front-end for verse-keeper

Application for searching, saving and marking up bible passages. 

Search by verse - "John 3 16" or "John 3 16-17"

Search by chapter - "John 3"


[Live site](https://verse-keeper-ui.herokuapp.com/)

[Backend repo](https://github.com/currymich/verse-keeper-api)

## ERD

- User
   - Unique username, email
   - Has many verses
   - Has many notes
   
- Verse
   - Has many notes
   - Belongs to user
       
- Note
   - Belongs to verse
   
### Schemas   
```
Verse
 t.string   "text"
 t.integer  "user_id"
 t.string   "reference"
```
   
```
User
 t.string   "username"
 t.string   "email"
 t.string   "password_digest"
 t.string   "name"
```

```
Notes 
 t.string   "text"
 t.integer  "verse_id"
```

## Wireframes

#### [Homepage](https://wireframe.cc/Ij14Ul)
#### [Saved Verses](https://wireframe.cc/rVu4jn)

## Technology Used

#### Bible API: http://www.rubydoc.info/gems/biblesearch-api/1.2.0
#### Node, Express, Angular, Rails
