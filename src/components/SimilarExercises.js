import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '50px', xs: '0' } }}>
            <Typography variant='h4' fontWeight={700} marginBottom='30px'>
                Exerchises that target the same master group
            </Typography>
            <Stack
                direction='row'
                sx={{ p: '2', position: 'relative' }}
                marginBottom='50px'
            >
                {targetMuscleExercises.length ? (
                    <HorizontalScrollbar data={targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
            <Typography variant='h4' marginBottom='30px' fontWeight={700}>
                Exerchises that target the same Equipment Exercises
            </Typography>
            <Stack
                direction='row'
                sx={{ p: '2', position: 'relative' }}
                marginBottom='50px'
            >
                {equipmentExercises.length ? (
                    <HorizontalScrollbar data={equipmentExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
