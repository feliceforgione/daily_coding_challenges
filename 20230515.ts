/* Create a like button that increase the likes by 1 buy uses optimistic updates */

import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function mockAPI(
    success: boolean
  ): Promise<{ likes: number; status: number }> {
    if (success)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ likes: likes + 1, status: 200 });
        }, 2000);
      });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ likes: likes, status: 400 });
      }, 2000);
    });
  }

  const handleLike = async () => {
    setLikes(likes + 1);

    try {
      const response = await mockAPI(true);
      if (response.status === 200) setLikes(response.likes);
    } catch (error) {
      setLikes(likes);
    }
  };

  return (
    <main>
      <p>{likes}</p>
      <button onClick={handleLike}>Like</button>
    </main>
  );
}

export default App;
