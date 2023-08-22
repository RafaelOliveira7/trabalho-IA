import { Grid, MenuItem, TextField } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useEffect, useState } from 'react';

const Home = (): JSX.Element => {
	const [entrada, setEntrada] = useState('');
	const [saida, setSaida] = useState('');

	useEffect(() => {
		console.log(entrada);
	}, [entrada]);

	return (
		<Grid container spacing={6} style={{ justifyContent: 'center' }}>
			<Grid xs={2}>
				<TextField
					id="select-idioma-entrada"
					select
					label=""
					defaultValue="pt-br"
					helperText="Selecione o idioma de entrada"
					variant="outlined"
					style={{ width: '100%' }}
					InputProps={{ sx: { borderRadius: 40 } }}
				>
					<MenuItem key="pt-br" value="pt-br">
						Português
					</MenuItem>
					<MenuItem key="es-es" value="es-es">
						Espanhol
					</MenuItem>
					<MenuItem key="en-us" value="en-us">
						Inglês
					</MenuItem>
				</TextField>
			</Grid>
			<Grid xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
				<CompareArrowsIcon />
			</Grid>
			<Grid xs={2} style={{ marginBottom: 30 }}>
				<TextField
					id="select-idioma-saida"
					select
					label=""
					defaultValue="en-us"
					helperText="Selecione o idioma de saída"
					variant="outlined"
					style={{ width: '100%' }}
					InputProps={{ sx: { borderRadius: 40 } }}
				>
					<MenuItem key="pt-br" value="pt-br">
						Português
					</MenuItem>
					<MenuItem key="es-es" value="es-es">
						Espanhol
					</MenuItem>
					<MenuItem key="en-us" value="en-us">
						Inglês
					</MenuItem>
				</TextField>
			</Grid>

			<Grid
				xs={12}
				style={{ marginBottom: 30, justifyContent: 'center', display: 'flex' }}
			>
				<TextField
					id="filled-textarea"
					label="Multiline Placeholder"
					placeholder="Placeholder"
					multiline
					variant="outlined"
					style={{ width: '50%' }}
					InputProps={{ sx: { borderRadius: 4 } }}
					maxRows={7}
					minRows={7}
					onChange={(e) => setEntrada(e.target.value)}
					value={entrada}
				/>
			</Grid>

			<Grid
				xs={12}
				style={{ marginBottom: 30, justifyContent: 'center', display: 'flex' }}
			>
				<TextField
					id="filled-textarea"
					label="Multiline Placeholder"
					placeholder="Placeholder"
					multiline
					variant="outlined"
					style={{ width: '50%' }}
					InputProps={{ sx: { borderRadius: 4 } }}
					maxRows={7}
					minRows={7}
					disabled
					onChange={(e) => setSaida(e.target.value)}
					value={saida}
				/>
			</Grid>
		</Grid>
	);
};

export default Home;
