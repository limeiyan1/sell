<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="item in goods" class="menu-item">
					<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li v-for="item in goods" class="food-list">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods" class="food-item">
							<div class="icon">
								<img :src="food.icon" width="57px" height="57px">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">${{food.price}}</span>
									<span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	
</template>
<script>
	export default {
		data() {
			return {
				goods: {}
			};
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			this.$http.get('/api/goods').then((response) => {
				response = response.body;
		        if (response.errno === 0) {
		            this.goods = response.data;
		        }
			});
		}
	};
</script>
<style scoped>
	.goods{
		position: absolute;
		width: 100%;
		top: 192px;
		bottom: 46px;
		display: flex;
		overflow: hidden;
	}
	.menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
	}
	.menu-wrapper .menu-item{
		display: table;
		width: 56px;
		height: 54px;
		line-height: 14px;
		padding: 0px 12px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	.menu-wrapper .text{
		font-size: 12px;
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		font-size: 12px;
		background: #f3f5f7;
	}
	.foods-wrapper{
		flex: 1
	}
	.foods-wrapper .title{
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147, 153, 159);
		background: #f3f5f7;
	}
	.foods-wrapper .food-item{
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);

	}
	.foods-wrapper .food-item:last-child{
		border-bottom: none;
		margin-bottom: 0px;
	}
	.foods-wrapper .icon{
		width: 57px;
		flex:  0 0 57px;
		margin-right: 10px;
	}
	.foods-wrapper .content{
		flex: 1;
	}
	.foods-wrapper .content .name{
		margin: 2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color: rgb(7, 17, 27);
	}
	.foods-wrapper .content .desc,
	.foods-wrapper .content .extra
	{
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	.foods-wrapper .content .desc{
		margin-bottom: 8px;
	}
	.foods-wrapper .content .extra{
		line-height: 10px;
	}
	.content .extra .count{
		margin-right: 12px;
	}
	.price{
		font-weight: 700;
		line-height: 24px;
	}
	.price .now{
		margin-right: 8px;
		font-size: 14px;
		color: rgb(240, 20, 20)
	}
	.price .old{
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
</style>