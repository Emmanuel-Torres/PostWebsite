DROP TABLE IF EXISTS post;

CREATE TABLE IF NOT EXISTS post (
    post_id serial PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    author VARCHAR (50),
    content TEXT,
    posted_on TIMESTAMP
);

INSERT INTO post(title, author, content, posted_on)
    VALUES ('Sample Title 1', 'Sample Author 1', 'Sample Contnet 1',  NOW()),
           ('Sample Title 2', 'Sample Author 2', 'Sample Contnet 2',  NOW()),
           ('Sample Title 3', 'Sample Author 3', 'Sample Contnet 3',  NOW());