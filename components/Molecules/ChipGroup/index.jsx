import { createStyles, Chip } from '@mantine/core';
import { NoEncryption } from '@mui/icons-material';
import { FlexBox } from '../../../styles/globals';
import { Text } from '../../Atoms/Text';

const useStyles = createStyles((theme, _params, getRef) => ({

    label: {
        color: theme.white,
    
        '&[data-variant = "outline"]':{
            backgroundColor: theme.black,
            '&:hover': {
                backgroundColor: theme.colors.queeryPink[4],
            },
        },
        '&[data-checked][data-variant="outline"]':{
            borderColor: 'transparent',
        },
        '&[data-checked]': {
            color: theme.black,
            borderColor: 'transparent',
            backgroundColor: theme.colors.queeryPink[2],
            '&, &:hover': {
                backgroundColor: theme.colors.queeryPink[2],
            },
  
            [`& .${getRef('iconWrapper')}`]: {
                color: theme.black,
            },
        },
    },
  
    iconWrapper: {
        ref: getRef('iconWrapper'),
    },
}));

export function ChipGroup({tag, setTag, tagData, color}) {
    const { classes } = useStyles();

    return (
        <>
            <Text text = "Choose a tag" size = "1rem" textAlign='left' margin='0 0 10px 0'/>
            <FlexBox>
                <Chip.Group required  multiple = {false} onChange = {setTag} position="center">
                    {tagData.map((tag) => {
                        return <Chip key = {tag} value = {tag}  classNames = {classes}>{tag}</Chip>;
                    })
                    }
                </Chip.Group>
            </FlexBox>
        </>
    );
}