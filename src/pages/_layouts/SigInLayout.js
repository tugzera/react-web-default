import React from "react";

function SigInLayout({ children, imageURL }) {
  return (
    <div className="page">
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col col-login mx-auto">
              <div className="text-center mb-6">
                <div>
                  <img
                    src={imageURL}
                    className="h-6"
                    alt="logo"
                    className="SignIn"
                  />
                </div>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigInLayout;
