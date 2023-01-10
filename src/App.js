import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import authors from './api/authors.json';
import posts from './api/posts.json';

function App() {
  // const [authors, setAuthors] = useState([]);

  // console.log(`authors is ${authors}`);

  // useEffect(() => {
  //   fetch('api/author.json')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAuthors(result);
  //     });
  // }, []);

  return (
    <div className="App">
      <div className="mx-40">
        <h1 className="m-10">Your current timezone is: Asia/Bangkok </h1>
        {posts.map((post) => (
          <li
            className={`m-10 list-none drop-shadow-md w-full rounded-sm ${
              post.id % 2 === 0 ? 'bg-blue-200' : 'bg-white'
            }`}
            key={post.id}
          >
            {authors.map(
              (author) =>
                author.id === post.author_id && (
                  <div className="w-full flex py-6 border-b-2 border-gray-500 items-center">
                    <img
                      src={author.avatar_url}
                      className="w-8 h-8 rounded-full mx-2"
                    />
                    <div>{author.name}</div>
                    <div>
                      post on{' '}
                      {dayjs(post.created_at).format(
                        'dddd, MMM D, YYYY, hh:mm'
                      )}
                    </div>
                  </div>
                )
            )}

            <div className="flex py-4">
              <img src={post.image_url} className="px-4" />
              <div>
                <h1 className="font-bold pb-4">{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
