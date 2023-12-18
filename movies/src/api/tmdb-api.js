
export const getMovies = (args) => {
  //const [page] = args.queryKey;
  const[,pages] = args.queryKey;
  const{page} = pages;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
          `/api/movies/tmdb/movie/${id}`, {
              headers: {
                  'Authorization': window.localStorage.getItem('token')
              }
          }
      ).then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch((error) => {
          throw error
      });
};
  
  export const getGenres = async () => {
    return fetch(
      "http://localhost:8080/api/movies/tmdb/genre", {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies/tmdb/movie/${id}/images`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();

        })
        .catch((error) => {
            throw error
        });
};

export const getMovieReviews = (id) => {
  return fetch(
          `/api/movies/tmdb/movie/${id}/reviews`, {
              headers: {
                  'Authorization': window.localStorage.getItem('token')
              }
          }
      )
      .then((res) => res.json())
      .then((json) => {
          return json;
      });
};

  export const getUpcomingMovies = () => {
    return fetch(
       // `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
`http://localhost:8080/api/movies/tmdb/upcoming`, {
  headers: {
    'Authorization': window.localStorage.getItem('token')
  }
}
    )
    .then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    }).catch((error) => {
            throw error
        });
};

export const getTopRatedMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/topRated`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
      ).then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch((error) => {
          throw error
      });
};

export const getCPMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/currentPopular`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  .then((response) => {
      if (!response.ok) {
          throw new Error(response.json().message);
      }
      return response.json();
  })
  .catch((error) => {
      throw error
  });
}; 

export const getpeople = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getPeopledetail = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getPeopleImage = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const writeReview = (review) => {
  return fetch('/api/reviews', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ review: review })
  }).then(res => res.json())
};