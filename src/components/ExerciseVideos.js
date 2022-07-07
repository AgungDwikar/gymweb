import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p='8px'>
            <Typography
                sx={{ fontSize: { lg: '44px', xs: '25px' } }}
                fontWeight={700}
                color='#000'
                mb='6px'
            >
                watch{' '}
                <span
                    style={{
                        color: '#ff2625',
                        fontWeight: '700',
                        textTransform: 'capitalize',
                    }}
                >
                    {name}
                </span>{' '}
                exercise videos
            </Typography>
            <Stack
                justifyContent='flex-start'
                flexWrap='wrap'
                alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '35px', xs: '0px' },
                }}
            >
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            style={{ borderTopLeftRadius: '20px' }}
                            src={item.video.thumbnails[0].url}
                            alt={item.video.title}
                        />
                        <Box height='70%' borderBottom='solid'>
                            <Typography
                                sx={{ fontSize: { lg: '18px', xs: '18px' } }}
                                fontWeight={600}
                                color='#000'
                                height='65px'
                            >
                                {item.video.title}
                            </Typography>
                            <Typography fontSize='14px' color='gray'>
                                {item.video.channelName}
                            </Typography>
                            <Typography fontSize='14px' color='green'>
                                {item.video.viewCountText}
                            </Typography>
                            <Typography fontSize='14px' color='#ff2625'>
                                {item.video.publishedTimeText}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
