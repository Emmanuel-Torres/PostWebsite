INSERT INTO post(title, author, content, posted_on)
    VALUES ('Sample Title 1', 'Sample Author 1', 'Sample Contnet 1',  NOW()),
           ('Sample Title 2', 'Sample Author 2', 'Sample Contnet 2',  NOW()),
           ('Sample Title 3', 'Sample Author 3', 'Sample Contnet 3',  NOW()),
           ('Sample Title 4', 'Sample Author 4', 'Sample Contnet 4',  NOW());

INSERT INTO comment(post_id, content, author, posted_on)
    VALUES (1, 'This is sample comment #1', 'Sample Author 1', NOW()),
           (1, 'This is sample comment #2', 'Sample Author 1', NOW()),
           (2, 'This is sample comment #3', 'Sample Author 2', NOW()),
           (3, 'This is sample comment #4', 'Sample Author 3', NOW());
