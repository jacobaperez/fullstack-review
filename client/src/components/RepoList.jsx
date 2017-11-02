import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div id="repolist">
    <h4> Repo List Component </h4>
    <div>
      { props.repos.map(index => <RepoListEntry repo={index}/>) }
    </div>
    <h2>There are {props.repos.length} repos.</h2>
  </div>
)

export default RepoList;
