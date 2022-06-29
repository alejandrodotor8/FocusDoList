describe('Numeros', () => {
	test('cero', () => {
		const z = 0
		expect(z).not.toBeNull()
		expect(z).toBeDefined()
		expect(z).not.toBeUndefined()
		expect(z).not.toBeTruthy()
		expect(z).toBeFalsy()
	})

	test('dos mas dos', () => {
		const value = 2 + 2
		expect(value).toBeGreaterThan(3)
		expect(value).toBeGreaterThanOrEqual(3.5)
		expect(value).toBeLessThan(5)
		expect(value).toBeLessThanOrEqual(4.5)

		// toBe y toEqual son equivalentes para números
		expect(value).toBe(4)
		expect(value).toEqual(4)
	})
})

test('no hay I en Team', () => {
	expect('team').not.toMatch(/I/)
})

test('hay "stop" en Christoph', () => {
	expect('Christoph').toMatch(/stop/)
})

const listaDeCompras = ['pañales', 'pañuelos', 'bolsas de basura', 'toallas de papel', 'leche']

test('la leche se encuentra en la lista de compras', () => {
	expect(listaDeCompras).toContain('leche')
	expect(new Set(listaDeCompras)).toContain('leche')
})

function compilarCódigoAndroid() {
	throw new Error('Usted está usando el código incorrecto')
}

test('La compilacion de la web va por buen camino', () => {
	expect(() => compilarCódigoAndroid()).toThrow()
	expect(() => compilarCódigoAndroid()).toThrow(Error)

	// Puede usar también el mensaje de error exacto o una expresión regular
	expect(() => compilarCódigoAndroid()).toThrow('Usted está usando el código incorrecto')
	expect(() => compilarCódigoAndroid()).toThrow(/Usted/)
})
