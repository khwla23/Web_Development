import React, { useState } from "react";
import headerStyle from "./Header.module.css";

function Header() {
  const [para, setPara] = useState(false);

  function handleButton() {
    if (para === true) {
      setPara(false);
    } else {
      setPara(true);
    }
  }

  return (
    <div>
      <h1 className={headerStyle.heading}>
        Exciting Upcoming Movies to Look Forward to in 2023{" "}
      </h1>
      <button onClick={handleButton} className={headerStyle.btn}>
        Click For Details
      </button>
      {para && (
        <p className={headerStyle.paredit}>
          As we move further into 2023, movie lovers around the world are
          eagerly anticipating the release of some of the biggest and most
          highly anticipated films in recent years. From action-packed
          blockbusters to heartfelt dramas, there's something for everyone in
          the lineup of movies scheduled to hit theaters in the coming months.
        </p>
      )}
    </div>
  );
}

export default Header;
