import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BoidyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import ExerciseDetail from '../pages/ExerciseDetail';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BoidyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: bodyPart,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];
    return (
        <Stack
            gap='30px'
            sx={{
                flexDirection: {
                    lg: 'row',
                    p: '20px',
                    alignItems: 'center',
                },
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading='lazy'
                className='detail-image'
                style={{ width: '600px', height: '600px' }}
            />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }, xs: '20px' }}>
                <Typography
                    variant='h3'
                    fontWeight={700}
                    style={{ borderBottom: '3px solid #FF2625 ' }}
                    textTransform='capitalize'
                >
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Lorem ipsum dolor sit amet,{' '}
                    <span style={{ color: '#ff2625' }}>
                        <b>{name}</b>
                    </span>{' '}
                    {` `}
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.{' '}
                    <span style={{ color: '#ff2625' }}>
                        <b>{target}</b>
                    </span>{' '}
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.s
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack
                        key={item.name}
                        direction='row'
                        gap='24px'
                        alignItems='center'
                    >
                        <Button
                            sx={{
                                background: '#fff2db',
                                borderRadius: '50%',
                                width: '80px',
                                height: '80px',
                            }}
                        >
                            <img
                                src={item.icon}
                                alt=''
                                style={{ width: '50px', height: '50px' }}
                            />
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
