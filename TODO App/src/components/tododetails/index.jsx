import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";


export default function ToDoDetails({todoDetails,setToDoDetails, openDialog, setOpenDialog}) {

    return <Fragment>
        <Dialog open={openDialog} onClose={()=>{
            setOpenDialog(false)
        }}>
            <DialogTitle >{todoDetails?.todo}</DialogTitle>
            <DialogActions><Button onClick={()=>{setToDoDetails(null); setOpenDialog(false)}}>Close</Button></DialogActions>
        </Dialog>
    </Fragment>

}