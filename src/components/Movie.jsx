function Movie (props) {
    const  {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster 

    } = props;
    
    return  <div id = {id} className="row">
    <div className="col s12 m12">
      <div className="card">
      <a className="btn-floating halfway-fab waves-effect waves-light black"><i className="material-icons">delete</i></a>
        <div className="card-image">
          <img className="activator" src={poster}/>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">thumb_up</i></a>
        </div>
        <div className="card-content">
        <p>{year}<span className="right">{type}</span></p>
        </div>
      </div>
    </div>
  </div>

}
export {Movie}