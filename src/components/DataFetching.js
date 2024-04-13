
import React, { useEffect, useState } from 'react'
import axios from "axios"

function DataFetching() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    axios
    .get("http://localhost:8000")
    .then(response => {
      setLoading(false)
      setError("")
      setPosts(response.data)
    })
    .catch(error => {
      setLoading(false)
      setError("something went wrong")
      setPosts({})
    })
  }, [])
  

  return (
    // <div>
    //   { loading ? "Loading !" : 
    //     posts.map((post, id) => (
    //       <div key = {id}>
    //         <p>{post.RegnNo}, {post.ApplicantName}, {post.State}</p>
    //       </div>
    //     ))
    //   }
    //   {error ? error : null}
    // </div>
    <div class="table">
        <table>
          <tr>
            <th>Regn No</th>
            <th>Name</th>
            <th>State</th>
          </tr>
          { loading ? "Loading !" : 
              posts.map((post, id) => (
                <tr key = {id}>
                  <td>{post.RegnNo}</td>
                  <td>{post.ApplicantName}</td>
                  <td>{post.State}</td>
                </tr>
              )).reverse()
          }
        </table>
    </div>
  )
}

export default DataFetching
