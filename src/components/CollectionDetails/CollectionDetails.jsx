import { Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CollectionDetails() {

    return(
        <Accordion>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            >
                <Typography align="center" sx={{width: '100%'}} variant="h4" color="primary.dark">Current Collection</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography align="center" sx={{width: '100%'}}>
                    This is a list of all of the movies you currently own.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default CollectionDetails;