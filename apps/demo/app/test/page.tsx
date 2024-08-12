"use client";

import React from "react";
import Frame, { FrameComponentProps, useFrame } from "react-frame-component";
import WatchScrollComponent from "../../config/blocks/WatchScroll";
import ReactDOM from "react-dom";

const TestPage = () => {
  return (
    <div>
      <div>
        Labore voluptate Lorem et voluptate fugiat magna nisi aliqua. Cupidatat
        ipsum occaecat magna enim ipsum enim non elit nisi voluptate. Veniam
        veniam veniam aute nostrud irure. Aliquip consectetur amet et elit aute
        laborum. Lorem nulla voluptate proident fugiat magna ea. Laborum aliquip
        sit nostrud consequat. Mollit quis minim veniam eu minim ex Lorem
        consectetur tempor ut Lorem cillum magna aliqua. Reprehenderit in enim
        ut Lorem exercitation nostrud nostrud irure laboris eu cillum ex. In
        ullamco minim nisi aliquip laborum occaecat. Mollit aute excepteur sint
        irure nulla. Cillum deserunt irure ipsum anim pariatur duis eiusmod
        reprehenderit cillum tempor est. Proident velit occaecat duis Lorem
        culpa aute nostrud. Occaecat cupidatat sint ex est deserunt enim elit
        occaecat duis labore est duis officia do. Excepteur ea sint incididunt
        eiusmod. Veniam cupidatat enim culpa reprehenderit amet est aliqua
        tempor cillum consequat dolore. Exercitation nisi irure nulla aliquip
        quis duis commodo nisi eu ipsum. Aliqua sint proident ipsum consequat
        dolor laboris fugiat elit est. Dolor dolore ut ullamco esse deserunt
        nulla nostrud excepteur non. Exercitation est officia aliquip incididunt
        eiusmod do ad voluptate reprehenderit adipisicing esse qui. Laborum esse
        mollit nisi officia nulla ut ad ullamco. Ea quis enim proident labore.
        Voluptate duis voluptate magna ex voluptate dolor sit voluptate ea ad
        adipisicing labore velit. Pariatur exercitation exercitation ipsum minim
        incididunt est elit ea reprehenderit reprehenderit nostrud eiusmod
        consectetur est. Ea fugiat ipsum ut culpa occaecat cillum commodo nisi
        enim eu non. Aute veniam ullamco duis nulla in aliquip duis nisi
        excepteur nostrud minim velit non. Anim eiusmod ad officia aute. Non
        ipsum exercitation pariatur aute. Sint in culpa amet pariatur minim sunt
        cillum ex tempor est mollit quis anim. Cillum aute elit eu tempor quis
        consequat eu incididunt duis esse sint voluptate voluptate. Qui qui sit
        Lorem adipisicing exercitation dolore labore proident fugiat dolor
        Lorem. Ea et ipsum cillum officia cupidatat laboris nostrud ad. Officia
        est anim sunt Lorem ullamco ut ipsum ea deserunt sit. Exercitation Lorem
        anim elit voluptate minim amet fugiat culpa velit. Enim aliquip ad culpa
        anim sit aliquip proident aliquip magna.
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
      <Frame>
        <h1>Hello</h1>
        <WatchScrollComponent />
      </Frame>
      {ReactDOM.createPortal(<WatchScrollComponent />, document.body)}
    </div>
  );
};

export default TestPage;
