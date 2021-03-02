import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ServiceList.css';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, email, service, productTitle, status) {
  return { name, email, service, productTitle, status };
}

const orders = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const ServiceList = () => {
  const [loggedInUser] = useState({});
  const [orderedList, setOrderedList] = useState([]);
  const classes = useStyles();

  useEffect(()=>{
    fetch('http://localhost:4000/totalOrder')
    .then(res => res.json())
    .then(data => setOrderedList(data));
  })
  //console.log(orderedList);
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2">
          <div>
            <img
              style={{ height: "45px" }}
              src="https://i.ibb.co/TBrkkyv/logo.png"
              alt=""
            />
          </div>
          <div className="mt-5">
            <a href="/admin">Service List</a> <br />
            <br />
            <Link to="/admin/addService">
            <a href="/admin/addService">Add Service</a> <br />
            </Link>
            <br />
            <a href="/admin/makeAdmin">Make Admin</a>
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-10">
        <div className="d-flex justify-content-center">
            <div className="mr-auto">
              <h4 className="ml-4">Service List</h4>
            </div>
            <div className="profile-pic">
              <h6 className="mr-4">{loggedInUser.displayName}</h6> 
              <img style={{height:'25px', width:'25px', borderRadius:'50%'}} src={loggedInUser.photoURL} alt=""/>
            </div>
          </div>
          <div className="p-5 serviceList-bg">
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Email ID</StyledTableCell>
            <StyledTableCell align="left">Service</StyledTableCell>
            <StyledTableCell align="left">Project Details</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedList.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell align="left" component="th" scope="row">
                {order.name}
              </StyledTableCell>
              <StyledTableCell align="left">{order.email}</StyledTableCell>
              <StyledTableCell align="left">{order.productTitle}</StyledTableCell>
              <StyledTableCell align="left">{order.description}</StyledTableCell>
              <StyledTableCell align="left">{order.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
