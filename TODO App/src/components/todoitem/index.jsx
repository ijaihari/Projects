import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

export default function TodoItem({ todo }) {
    console.log(todo)
    return (
        <Card sx={{
            maxWidth: 350,
            display: 'flex',
            felxDirection: 'column',
            justifyContent: 'space-between'
        }
        }>
            <CardContent>
                <Typography varient="h5" color={'text.secondary'}>
                    {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{
                    backgroundColor: "black",
                    color: "white",
                    opacity: '0.75',
                    '&:hover': {
                        backgroundColor: '#000000',
                        color: "white",
                        opacity: '1'
                    }
                }}>Details</Button>
            </CardActions>
        </Card>
    )
}