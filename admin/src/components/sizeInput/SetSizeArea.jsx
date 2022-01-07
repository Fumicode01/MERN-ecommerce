import React, {useState, useCallback, useEffect} from 'react'
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Button,  makeStyles } from '@material-ui/core'
import { CheckCircle, Delete, Edit } from '@material-ui/icons'
import  TextInput  from "../textInput/TextInput"
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    checkIcon:{
        float:'right'
    },
    container:{
        minWidth:"350px",
        maxWidth: "450px"
    },
    iconCell:{
        height:48,
        width:48
    },
    addButton:{
        float:"right",
        margin:"10px"
    }
})

const SetSizeArea = (props) => {
    const classes = useStyles();
    const [index, setIndex] = useState(0),
             [size, setSize] = useState(""),
             [quantity, setQuantity] = useState(0);

    const inputSize = useCallback((event) => {
        setSize(event.target.value)
    },[setSize])

    const inputQuantity = useCallback((event) => {
        setQuantity(event.target.value)
    },[setQuantity])

    const addSize = (index, size, quantity) => {
        if(size === ""  || quantity === "") {
            return false
        } else {
            if (index === props.sizes.length) {
                props.setSizes(prevState => [...prevState, {size:size, quantity:quantity}])
                setIndex(index + 1)
                setSize("")
                setQuantity(0)
            } else {
                const newSizes = props.sizes
                newSizes[index] = {size: size, quantity:quantity}
                props.setSizes(newSizes)
                setIndex(newSizes.length)
                setSize("")
                setQuantity(0)
            }
        }
    };

    const editSize = (index, size, quantity) => {
        setIndex(index);
        setSize(size);
        setQuantity(quantity);
    }

    const deleteSize = (deleteIndex) => {
        const newSizes = props.sizes.filter((item, i) => i !== deleteIndex);
        props.setSizes(newSizes)
    }

    const memoIndex = useEffect(() => {
        setIndex(props.sizes.length)
    },[props.sizes.length])

    return (
        <div>
            <TableContainer component={Paper} className={classes.container}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.iconCell}>Size</TableCell>
                            <TableCell className={classes.iconCell}>Quantity</TableCell>
                            <TableCell className={classes.iconCell} />
                            <TableCell className={classes.iconCell} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.sizes.length > 0 && (
                            props.sizes.map((item, i) => (
                                <TableRow key={item.size}>
                                    <TableCell>{item.size}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell} onClick={()=> editSize(i, item.size, item.quantity)}>
                                            <Edit />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell} onClick={() => deleteSize(i)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <div>
                    <TextInput
                        fullWidth={false} label={"Size"} multiline={false} required={true}
                        onChange={inputSize} value={size} type={"text"} row={1}
                    />
                    <TextInput
                        fullWidth={false} label={"Quantity"} multiline={false} required={true}
                        onChange={inputQuantity} value={quantity} type={"number"} row={1}
                    />
                </div>
                <Button className={classes.addButton} onClick={() => addSize(index, size, quantity)} color="primary" variant="outlined">
                    Add
                </Button>
            </TableContainer>
        </div>
    )
}

export default SetSizeArea
