import { createStyles, Chip } from '@mantine/core';
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


export function ChipGroup({ onChange, postTags}) {
    const { classes } = useStyles();
    console.debug('postTags', postTags);

    return (
        <>
            <Text text = "Choose a tag" size = "1rem" textAlign='left' margin='0 0 10px 0'/>
            <FlexBox>
                <Chip.Group required  multiple = {false} onChange = {onChange} position="center">
                    {postTags.map((tag) => {
                        return <Chip key = {tag.tagId} value = {tag.tagId}  classNames = {classes}>{tag.tagName}</Chip>;
                    })
                    }
                </Chip.Group>
            </FlexBox>
        </>
    );
}