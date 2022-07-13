const NOTIFICATIONS = [
	{
		id: '1',
		type: 'order',
		isRead: false,
		title: 'Your order #123456789 has been confirmed',
		body: {
			image: require('@assets/images/products/minimal-stand.png'),
			text: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
		}
	},
	{
		id: '2',
		type: 'order',
		isRead: true,
		title: 'Your order #123456789 has been canceled',
		body: {
			image: require('@assets/images/products/simple-lamp.png'),
			text: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
		}
	},
	{
		id: '7',
		type: 'sales',
		isRead: false,
		title: 'Discover hot sale furnitures this week',
		body: {
			image: null,
			text: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
		}
	},
	{
		id: '3',
		type: 'order',
		isRead: true,
		title: 'Your order #123456789 has been shipped successfully',
		body: {
			image: require('@assets/images/products/coffee-table.png'),
			text: 'Please help us to confirm and rate your order to get 10% discount code for next order.',
		}
	},
	{
		id: '4',
		type: 'order',
		isRead: true,
		title: 'Your order #123456789 has been confirmed',
		body: {
			image: require('@assets/images/products/coffee-table.png'),
			text: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
		}
	},
	{
		id: '5',
		type: 'order',
		isRead: true,
		title: 'Your order #123456789 has been canceled',
		body: {
			image: require('@assets/images/products/simple-desk.png'),
			text: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
		}
	},
	{
		id: '6',
		type: 'order',
		isRead: true,
		title: 'Your order #123456789 has been shipped successfully',
		body: {
			image: require('@assets/images/products/coffee-table.png'),
			text: 'Please help us to confirm and rate your order to get 10% discount code for next order.',
		}
	},
]

export default NOTIFICATIONS;