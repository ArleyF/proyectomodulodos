Proceso Miniferreteria
	Definir valorMartillos,valorPuntillas,ventas Como Real;
	Escribir 'Ingrese el valor de los martillos: ';
	Leer valorMartillos;
	Escribir 'Ingrese el valor de las puntillas: ';
	Leer valorPuntillas;
	ventas <- valorMartillos+valorPuntillas;
	Si ventas>1000000 Entonces
		ventas <- ventas+200000;
	FinSi
	Si ventas<200000 Entonces
		Escribir 'No cumpliste con las ventas mínimas del mes';
	SiNo
		Escribir 'Las ventas del mes son de $',ventas;
	FinSi
FinProceso
