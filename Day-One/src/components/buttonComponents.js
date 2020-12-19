import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > span': {
            maxWidth: 60,
            width: '100%',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(18),
        marginRight: theme.spacing(-2),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const styleButton = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo2: {
        marginTop: "2rem",
        marginLeft: 15,

    },
}));

export default function ButtonComponents() {

    const classes = styleButton();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.demo2}>
            <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <StyledTab label="All" />
                <StyledTab label="Fantasy" />
                <StyledTab label="Historical" />
                <StyledTab label="Myth" />
                <StyledTab label="Romance" />
                <StyledTab label="Comedy" />
            </StyledTabs>
            <Typography className={classes.padding} />
        </div>
    )
}


