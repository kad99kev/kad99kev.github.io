import React from 'react'
import {Text} from "../../../styled/repository"

export const RepositoryDescription = ({ repo }) => (
  <div>
    <Text>
      {repo.description || "This repository doesn't have any description!"}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </Text>
  </div>
) 
