const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div>
                    <img src={data.place.pic}/>
                </div>
                <div>
                    <h1>{ data.place.name }</h1>
                    <h2>{data.place.cuisines}</h2>
                </div>
                <div>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
            </main>
        </Def>
    ) 
}

module.exports = show