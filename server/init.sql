CREATE TABLE IF NOT EXISTS post (
    post_id serial PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    author VARCHAR (50),
    content TEXT,
    posted_on TIMESTAMP
);