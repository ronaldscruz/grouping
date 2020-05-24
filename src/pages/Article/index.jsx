import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";

function Article() {
  const articleMock = {
      title: 'A queda da torre de piza',
      autor: {
        photoSrc: null,
        name: 'Victor Tinoco',
        isJedi: true,
        facebook: 'fb.com/victormartinstinoco',
        linkedin: 'linkedin.com/in/victormartinstinoco',
        twitter: 'twitter.com//victrtinoco'
      },
      timeInMinutes: 12,
      likes: 800,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eleifend tellus. Fusce tristique pulvinar porta. Fusce mattis est ac tempus blandit. Praesent imperdiet mi nibh, vitae pharetra est malesuada eget. Mauris egestas erat sem, in ultrices ante aliquet fringilla. Aenean pharetra vehicula est commodo dapibus. Vivamus nec ultricies eros. Morbi nec turpis sed arcu varius convallis. Cras ullamcorper nibh eleifend lacinia pellentesque. Sed varius porta arcu, non laoreet risus dictum ut. Morbi tristique in diam eget ullamcorper. Nulla euismod odio gravida vulputate fermentum. Sed posuere mauris quis odio tristique pretium. Aliquam risus turpis, condimentum id tempus ut, ultrices at odio. Donec et elit a dui euismod finibus quis a quam. Nunc aliquam hendrerit imperdiet.

      Proin ac venenatis mi, vel aliquet nisi. Duis in magna augue. Integer laoreet gravida velit. Nulla sed accumsan nisl, vel hendrerit felis. Vivamus vel elementum metus. Morbi at libero dui. Vestibulum ornare lectus in tortor tincidunt tincidunt. Sed velit quam, rhoncus ut sapien cursus, varius aliquet diam. Integer sed augue ut purus accumsan semper at tempor eros. Duis erat tortor, pharetra eget enim bibendum, sollicitudin porttitor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      
      Maecenas efficitur mi ipsum, quis tempor ex dapibus ut. Pellentesque vel nunc vel lorem suscipit tincidunt. Duis tortor elit, dapibus vitae pretium a, ullamcorper nec nisl. Suspendisse sollicitudin arcu et tortor mattis sodales. Aenean iaculis, felis sit amet ornare lobortis, dolor lorem bibendum orci, nec accumsan dolor tortor ac leo. Duis viverra tincidunt sem et egestas. Nulla eu nulla eget turpis lobortis volutpat eu quis lectus. Suspendisse lacinia congue ligula, ut placerat lectus finibus id. Integer a libero congue ipsum porta gravida a sed velit. Etiam mattis, ligula varius iaculis ultricies, metus mi placerat augue, in tristique dui ligula nec nunc.`
    };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
      </div>
    </div>
  );
}

export default Article;
