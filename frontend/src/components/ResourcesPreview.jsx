import { useState, useEffect } from "react";

const ResourcesPreview = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
    fetch('http://127.0.0.1:5000/api/resources')
        .then(res => res.json())
        .then(data => setResources(data.slice(0, 5)))
        .catch(err => console.error('Error fetching resources:', err));
    }, []);

    return(
        <section className="resources" id="resources">
            <div className="container">
                <h2 className="section-title">Preview of Sample Resources</h2>
                <div className="resources-grid">
                {resources.map((resource) => (
                    <div key={resource.id} className="resource-card">
                    <span className="resource-type">{resource.type}</span>
                    <h4>{resource.name}</h4>
                    <p>{resource.description}</p>
                    <div className="resource-info">
                        <span>{resource.hours} • {resource.capacity}</span>
                        <span>{resource.address}</span>
                        <span className="availability">{resource.availability}</span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default ResourcesPreview;