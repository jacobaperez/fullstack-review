import React from 'react';

const RepoListEntry = ({repo}) => {
  return (
    <div>
      <a href={repo.html_url}>USER: {repo.username}, TITLE: {repo.name},  RATING: {repo.stars}</a>
    </div>
  )
}

export default RepoListEntry;
