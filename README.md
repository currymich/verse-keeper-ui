# Verse Keeper API
Rails backend for verse-keeper

## ERD

- Book
   - Has many verses

- User
   - Has many verses
   - Has many notes


### Schemas   
```
Verse
  t.string "text"
  t.integer "chapter_num"
  t.integer "verse_num"
  t.integer "book_id"
```

```
User
  t.string "username"
  t.string "email"
  t.string "password_digest"
```

```
Notes
   t.string "text"
   t.integer "verse_id"
   t.integer "user_id"
```

## Wireframes

#### [Homepage](https://wireframe.cc/Ij14Ul)
#### [Saved Verses](https://wireframe.cc/rVu4jn)

## Technology Used

#### Bible API: http://www.rubydoc.info/gems/biblesearch-api/1.2.0
#### Node, Express, Angular, Rails
