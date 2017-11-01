DROP DATABASE github;

CREATE DATABASE github;

USE github;

CREATE TABLE users (
  ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  username CHAR(255) NOT NULL
);

CREATE TABLE repos (
  ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  username INTEGER NOT NULL,
  name TEXT NOT NULL,
  html_url TEXT NOT NULL,
  stars INTEGER
);

ALTER TABLE repos ADD FOREIGN KEY (username) REFERENCES users(ID);

INSERT INTO users (username) VALUES ('octocat');

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'git-consortium', 'https://github.com/octocat/git-consortium', 7);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'hello-worId', 'https://github.com/octocat/hello-worId', 14);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'Hello-World', 'https://github.com/octocat/Hello-World', 1407);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'linguist', 'https://github.com/octocat/linguist', 4);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'octocat.github.io', 'https://github.com/octocat/octocat.github.io', 15);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'Spoon-Knife', 'https://github.com/octocat/Spoon-Knife', 9961);

INSERT INTO repos (username, name, html_url, stars) VALUES
((select id from users where username='octocat'), 'test-repo1', 'https://github.com/octocat/test-repo1', 0);
