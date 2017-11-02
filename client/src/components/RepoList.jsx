import React from 'react';

const RepoList = (props) => (
  <div id="repolist">
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;
