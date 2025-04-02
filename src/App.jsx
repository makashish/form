import { useState, useEffect } from 'react'; 
import axios from 'axios';

const API_URL = 'https://form-backend-3-xle8.onrender.com'; // Change after backend deploy

function App() { const [job, setJob] = useState({ title: '', description: '', company: '' }); 
const [jobs, setJobs] = useState([]);

useEffect(() => { axios.get(API_URL).then(res => setJobs(res.data)).catch(console.error); }, []);

const handleChange = (e) => { setJob({ ...job, [e.target.name]: e.target.value }); };

const handleSubmit = async (e) => { e.preventDefault(); await axios.post(API_URL, job); setJob({ title: '', description: '', company: '' }); };

return ( <div> <h1>Job Form</h1> 
<form onSubmit={handleSubmit}>
   <input name="title" value={job.title} onChange={handleChange} placeholder="Job Title" />
    <input name="description" value={job.description} onChange={handleChange} placeholder="Description" />
     <input name="company" value={job.company} onChange={handleChange} placeholder="Company" /> 
     <button type="submit">Submit</button> </form> 
     <h2>Job Listings</h2> <ul>
       {jobs.map((j, i) => ( <li key={i}>{j.title} at {j.company}</li> ))} </ul> </div> ); }

export default App;