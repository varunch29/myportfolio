"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        
        const data = await res.json();
        const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
        
        setBlogs(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <section>
      <h2>Latest Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
