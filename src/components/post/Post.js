import "./post.css";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img className="post-img" src="images/post/post_img_1.jpg" alt="post" />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post-date">1 hour ago.</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem
        animi eos rem cupiditate! Natus magnam asperiores ipsam recusandae alias
        reprehenderit praesentium delectus molestiae fuga error illum enim
        laudantium, eos molestias, consequuntur explicabo aspernatur, ipsum
        accusantium beatae? Mollitia harum maxime ipsa suscipit! Iusto, maiores
        nihil! Quia vitae hic omnis quis incidunt voluptatem ipsam nam voluptate
        reprehenderit ullam officia minus sunt soluta, quos assumenda nisi eius
        quaerat accusantium, excepturi numquam molestiae animi eos. Debitis
        necessitatibus deleniti et tempore, sit quas aspernatur ipsam molestiae
        quibusdam, ex, qui assumenda in harum recusandae ea quidem. Explicabo ea
        voluptate incidunt beatae tempore nostrum fugit dicta.
      </p>
    </div>
  );
};

export default Post;
