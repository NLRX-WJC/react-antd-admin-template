import React, {useEffect} from "react";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "@/store/actions";
import Layout from "@/views/layout";
import Login from "@/views/login";

import routeList from "@/config/routeMap";

const LazyLayout = (props) =>{
  const dispatch = useDispatch();
  // dispatch(getUserInfo(token)).then(() => <Layout />)

  useEffect(() => {
    dispatch(getUserInfo(token));
  }, []);

  const { token, role } = useSelector(state => state.user);

  return role ? <Layout />: null;
}




const Router = (props)=> {
    // const { token, role, getUserInfo } = this.props;

    const { token, role } = useSelector(state => state.user);
    // const dispatch = useDispatch();

    console.log(`token in Router:${token}, role:${role}`)

    
    const handleFilter = (route) => {
      // 过滤没有权限的页面
      let result = role === "admin" || !route.roles || route.roles.includes(role);
      // console.log(`location:${pathname},role:${role},handleFilter for ${route.path}, result:${result}`)
      return result;
    };


    return (
      <HashRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route path='/' element={
            !token ? (<Navigate replace to="/login" />) : ( role ? <Layout /> : <LazyLayout token={token}/>)
          }>
 
                {routeList.map((route) => {
                  return (
                    handleFilter(route) ? (
                      <Route
                        element={route.component}
                        key={route.path}
                        path={route.path}
                      />
                    ) : null
                  );
                })}
                <Route path="*" element={<Navigate to="/error/404" replace />} />


          </Route>


         


          {/* <Route path='/' element={ <Layout /> } /> */}

          {/* <Route
            path="/"
            element={() => {
              if (!token) {
                // return <Redirect to="/login" />;
      
                return redirect("/login");
              } else {
                if (role) {
                  return <Layout />;
                } else {
                  getUserInfo(token).then(() => <Layout />);
                }
              }
            }}
          /> */}
        </Routes>
      </HashRouter>
    );
}

export default Router;
