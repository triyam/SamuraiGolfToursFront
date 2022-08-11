import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const Lorem = () => {
  const location = useLocation();
  const { title } = location.state;
  const navigate = useNavigate();
  return (
    <>
    {/* <div className="row"> */}
    <div className='container mt-3' style={{marginBottom:"5%"}}>
          <Header/>
          </div>
          
   
    
          <Breadcrumb listProps={{ className: 'mb-0' }}>
        <Breadcrumb.Item onClick={() => navigate('/home')} style={{ paddingBottom: '0px' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active onClick={() => navigate('/lorem')} style={{ paddingBottom: '0px' }}>
        私たちに関しては
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="container mt-3">
        
        <h1>私たちに関しては</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio ab laboriosam. Laboriosam maiores eius,
          labore, eligendi fuga, ea excepturi dolores dignissimos nostrum asperiores repudiandae ab expedita velit
          voluptatum ut aliquam. Ut autem quasi dolorem nam totam excepturi aut obcaecati, dolorum corrupti illo. Nam
          ipsum cumque nulla vitae doloremque asperiores, nobis exercitationem fugit voluptatum accusantium repellendus
          laudantium dicta architecto laborum vel, voluptates accusamus autem cum minima voluptate? Impedit minima
          voluptas soluta obcaecati amet laboriosam doloribus excepturi in earum ex animi pariatur, delectus quasi
          mollitia, corrupti fuga! Possimus expedita veniam tempora, quo voluptatem, libero eveniet asperiores
          recusandae debitis ratione velit necessitatibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio ab laboriosam. Laboriosam maiores eius,
          labore, eligendi fuga, ea excepturi dolores dignissimos nostrum asperiores repudiandae ab expedita velit
          voluptatum ut aliquam. Ut autem quasi dolorem nam totam excepturi aut obcaecati, dolorum corrupti illo. Nam
          ipsum cumque nulla vitae doloremque asperiores, nobis exercitationem fugit voluptatum accusantium repellendus
          laudantium dicta architecto laborum vel, voluptates accusamus autem cum minima voluptate? Impedit minima
          voluptas soluta obcaecati amet laboriosam doloribus excepturi in earum ex animi pariatur, delectus quasi
          mollitia, corrupti fuga! Possimus expedita veniam tempora, quo voluptatem, libero eveniet asperiores
          recusandae debitis ratione velit necessitatibus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est qui iure voluptas accusamus ipsum aliquam nobis
          similique eligendi, nisi optio at, unde adipisci id quis recusandae ab assumenda. Mollitia assumenda quas
          minus, debitis non quibusdam animi? Porro corporis architecto fuga laborum, sed perspiciatis expedita fugiat
          similique quae inventore temporibus ipsam?
        </p>
        </div>
        <div>
        <Footer/>
        </div>
      {/* </div> */}
    </>
  );
};

export default Lorem;