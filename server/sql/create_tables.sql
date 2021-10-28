DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS comment;

CREATE TABLE IF NOT EXISTS post (
    post_id serial PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    author VARCHAR (50),
    content TEXT,
    posted_on TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comment (
    comment_id SERIAL PRIMARY KEY,
    post_id INT,
    content TEXT,
    author VARCHAR(50),
    posted_on TIMESTAMP,
    CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES post(post_id)
);