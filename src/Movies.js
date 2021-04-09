import React from 'react';

const Movies = ({data}) => {
    return(
        <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                </tr>
                </thead>
               <tbody>
               {
                    data.map((movie,i)=>{
                       return( <tr key={i}>
                            <td>{movie.name}</td>
                            <td>{movie.year}</td>
                        </tr>)
                    })
                }
               </tbody>

            </table>
    )
}

export default Movies;