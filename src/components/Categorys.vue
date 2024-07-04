<template>
	<div v-for="section in sections">
		<div :id="section.id" class="bg-white flex flex-col items-center justify-center w-full max-w-[728px] m-auto p-6 pt-[15%]">
			<div class="flex gap-1 items-center">
				<div class="lazy loading left delay-[0.2s] mr-2">
					<img :src="section.num">
				</div>
				<div class="lazy loading left delay-[0.4s]">
					<img :src="section.title">
				</div>
				<div class="lazy loading up delay-[0.6s] mr-2">
					<img :src="section.char">
				</div>
			</div>
			<div class="lazy loading up delay-[0.6s]">
				<img :src="section.line">
			</div>
			<div class="lazy loading up delay-[0.4s] p-4 xs:py-10">
				<img :src="section.text">
			</div>
		</div>
		<div class="relative">
			<div class="lazy loading down delay-[0.4s] m-auto absolute top-[-1%] xs:top-[-0.5%] left-0 right-0">
				<img class="w-[3px] xs:w-[4px] m-auto" src="/img/items/dots.png">
			</div>
			<div :class="section.bg" class="pt-8 pb-5 px-5">
				<div class="flex items-center gap-2 w-4/5 m-auto mb-[6%]">
					<div class="lazy loading right delay-[0.4s]">
						<img src="/img/items/sun.png">
					</div>
					<div class="lazy loading up delay-[0.2s]">
						<img src="/img/items/01_yuru_6.png">
					</div>
					<div class="lazy loading left delay-[0.4s]">
						<img src="/img/items/moon.png">
					</div>
				</div>
				<div v-for="item in section.items" class="relative">
					<div class="lazy loading down" :class="item.bar">
						<img :src="item.next">
					</div>
					<div class="relative flex mb-[10%]">
						<div class="lazy loading up" :class="item.clockBg">
							<img :src="item.clock">
						</div>
						<div>
							<svg width="24" height="24" viewBox="0 0 24 24" class="sm:w-[45px] sm:h-[45px]">
								<path d="M24 12 L24 24 L12 18 Z" style="fill:white"></path>
							</svg>
						</div>
						<div>
							<div class="bg-white p-4 xs:p-6 rounded-xl flex flex-col gap-2 xs:gap-4 shadow-md relative">
								<div class="lazy loading delay-[1.4s] absolute" :class="item.position">
									<img :src="item.pack">
								</div>
								<div class="lazy loading left delay-[0.4s] w-1/2">
									<img :src="item.sub">
								</div>
								<div class="lazy loading left delay-[0.8s] w-5/6">
									<img :src="item.name">
								</div>
								<div class="lazy loading up delay-[1s]">
									<img :src="item.img">
								</div>
								<div class="m-auto lazy loading up delay-[1.4s]">
									<Btn01 :color="item.btnClr" :link="item.link" />
								</div>
							</div>
							<div class="lazy loading down delay-[0.6s] bg-white p-2 px-4 xs:p-4 rounded-lg shadow-md mt-2 xs:mt-4">
								<app-accordion>
									<template v-slot:title>
										<p>商品説明</p>
									</template>
									<template v-slot:content>
									<div class="border-t border-gray py-2 mt-1 2s:py-4 2s:mt-2 sm:py-6 sm:mt-4">
										<img :src="item.exp">
									</div>
									</template>
								</app-accordion>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Btn01 from './Btn01.vue';
import AppAccordion from "./Accordion.vue";
import { ref } from 'vue';

const sections = ref([
	{
		id: "01",
		num: "/img/items/01_yuru_1.png",
		title: "/img/items/01_yuru_2.png",
		char: "/img/top_6.png",
		line: "/img/items/01_yuru_3.png",
		text: "/img/items/01_yuru_4.png",
		bg: "bg-pink",
		items: [
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-pink absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock7.png",
				sub: "/img/items/sub7.png",
				pack: "/img/items/01_yuru_11.png",
				position: "top-[1%] right-[6%] w-1/4 rotate-[15deg]",
				name: "/img/items/01_yuru_12.png",
				img: "/img/items/01_yuru_13.png",
				btnClr: "bg-btn-pink",
				link: "https://item.rakuten.co.jp/oga22i/h00082501/",
				next: "",
				exp: "/img/items/01_yuru_16.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-pink absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock10.png",
				sub: "/img/items/sub10.png",
				pack: "/img/items/01_yuru_20.png",
				position: "top-[-3%] right-[6%] w-1/4 rotate-[15deg]",
				name: "/img/items/01_yuru_19.png",
				img: "/img/items/01_yuru_21.png",
				btnClr: "bg-btn-pink",
				link: "https://item.rakuten.co.jp/oga22i/h00012701/",
				next: "",
				exp: "/img/items/01_yuru_22.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-pink absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock15.png",
				sub: "/img/items/sub15.png",
				pack: "/img/items/01_yuru_26.png",
				position: "top-[3%] right-[6%] w-1/4 rotate-[10deg]",
				name: "/img/items/01_yuru_25.png",
				img: "/img/items/01_yuru_27.png",
				btnClr: "bg-btn-pink",
				link: "https://item.rakuten.co.jp/oga22i/h00090201/",
				next: "",
				exp: "/img/items/01_yuru_28.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-pink absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock18.png",
				sub: "/img/items/sub18.png",
				pack: "/img/items/01_yuru_32.png",
				position: "top-[3%] right-[6%] w-1/4 rotate-[10deg]",
				name: "/img/items/01_yuru_31.png",
				img: "/img/items/01_yuru_33.png",
				btnClr: "bg-btn-pink",
				link: "https://item.rakuten.co.jp/oga22i/h00073101/",
				next: "",
				exp: "/img/items/01_yuru_34.png"
			},
			{
				bar: "w-[12%] 2s:w-[8%] absolute bottom-0 left-0 2s:left-[3%]",
				clockBg: "bg-pink h-[9rem] 2s:h-[15rem] sm:h-[20rem]",
				clock: "/img/items/clock21.png",
				sub: "/img/items/sub21.png",
				pack: "/img/items/01_yuru_38.png",
				position: "top-[-4%] right-[-4%] w-1/2 rotate-[0deg]",
				name: "/img/items/01_yuru_37.png",
				img: "/img/items/01_yuru_41.png",
				btnClr: "bg-btn-pink",
				link: "https://item.rakuten.co.jp/oga22i/h000745/",
				next: "/img/items/01_yuru_43.png",
				exp: "/img/items/01_yuru_42.png"
			}
		]
	},
	{
		id: "02",
		num: "/img/items/02_sto_1.png",
		title: "/img/items/02_sto_2.png",
		char: "/img/top_7.png",
		line: "/img/items/02_sto_3.png",
		text: "/img/items/02_sto_4.png",
		bg: "bg-yellow",
		items: [
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-yellow absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock7.png",
				sub: "/img/items/sub7.png",
				pack: "/img/items/02_sto_6.png",
				position: "top-[-4%] right-[-3%] w-1/4 rotate-[-5deg]",
				name: "/img/items/02_sto_5.png",
				img: "/img/items/02_sto_7.png",
				btnClr: "bg-btn-yellow",
				link: "https://item.rakuten.co.jp/oga22i/s00046801/",
				next: "",
				exp: "/img/items/02_sto_8.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-yellow absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock10.png",
				sub: "/img/items/sub10.png",
				pack: "/img/items/02_sto_10.png",
				position: "top-[2%] right-[6%] w-1/3 rotate-[5deg]",
				name: "/img/items/02_sto_9.png",
				img: "/img/items/02_sto_12.png",
				btnClr: "bg-btn-yellow",
				link: "https://item.rakuten.co.jp/oga22i/h00084401/",
				next: "",
				exp: "/img/items/02_sto_13.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-yellow absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock15.png",
				sub: "/img/items/sub15.png",
				pack: "/img/items/02_sto_15.png",
				position: "top-[3%] right-[6%] w-1/4 rotate-[0deg]",
				name: "/img/items/02_sto_14.png",
				img: "/img/items/02_sto_16.png",
				btnClr: "bg-btn-yellow",
				link: "https://item.rakuten.co.jp/oga22i/h00111001/",
				next: "",
				exp: "/img/items/02_sto_17.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-yellow absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock18.png",
				sub: "/img/items/sub18.png",
				pack: "/img/items/02_sto_19p.png",
				position: "top-[3%] right-[6%] w-1/5 rotate-[5deg]",
				name: "/img/items/02_sto_18.png",
				img: "/img/items/02_sto_19.png",
				btnClr: "bg-btn-yellow",
				link: "https://item.rakuten.co.jp/oga22i/h00032301/",
				next: "",
				exp: "/img/items/02_sto_20.png"
			},
			{
				bar: "w-[12%] 2s:w-[8%] absolute bottom-0 left-0 2s:left-[3%]",
				clockBg: "bg-yellow h-[8.5rem] 2s:h-[14rem] sm:h-[20rem]",
				clock: "/img/items/clock21.png",
				sub: "/img/items/sub21.png",
				pack: "/img/items/02_sto_22p.png",
				position: "top-[0] right-[2%] w-1/5 rotate-[5deg]",
				name: "/img/items/02_sto_21.png",
				img: "/img/items/02_sto_22.png",
				btnClr: "bg-btn-yellow",
				link: "https://item.rakuten.co.jp/oga22i/h00011501/",
				next: "/img/items/02_sto_24.png",
				exp: "/img/items/02_sto_23.png"
			}
		]
	},
	{
		id: "03",
		num: "/img/items/03_bea_1.png",
		title: "/img/items/03_bea_2.png",
		char: "/img/top_8.png",
		line: "/img/items/03_bea_3.png",
		text: "/img/items/03_bea_4.png",
		bg: "bg-blue",
		items: [
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-blue absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock7.png",
				sub: "/img/items/sub7.png",
				pack: "/img/items/03_bea_9.png",
				position: "top-[0%] right-[-3%] w-1/4 rotate-[-10deg]",
				name: "/img/items/03_bea_7.png",
				img: "/img/items/03_bea_8.png",
				btnClr: "bg-btn-blue",
				link: "https://item.rakuten.co.jp/oga22i/h00013001/",
				next: "",
				exp: "/img/items/03_bea_11.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-blue absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock10.png",
				sub: "/img/items/sub10.png",
				pack: "/img/items/03_bea_16.png",
				position: "top-0 right-0 w-1/3 rotate-[-5deg]",
				name: "/img/items/03_bea_14.png",
				img: "/img/items/03_bea_15.png",
				btnClr: "bg-btn-blue",
				link: "https://item.rakuten.co.jp/oga22i/h001029/",
				next: "",
				exp: "/img/items/03_bea_17.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-blue absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock15.png",
				sub: "/img/items/sub15.png",
				pack: "/img/items/03_bea_19.png",
				position: "top-[-2%] right-[-2%] w-1/4 rotate-[10deg]",
				name: "/img/items/03_bea_20.png",
				img: "/img/items/03_bea_21.png",
				btnClr: "bg-btn-blue",
				link: "https://item.rakuten.co.jp/oga22i/h00091001/",
				next: "",
				exp: "/img/items/03_bea_22.png"
			},
			{
				bar: "w-[5%] h-[26rem] 3s:h-[29rem] 2s:h-[37rem] xs:h-[48rem] sm:h-[56rem] bg-line-blue absolute top-0 left-[5%]",
				clockBg: "",
				clock: "/img/items/clock18.png",
				sub: "/img/items/sub18.png",
				pack: "/img/items/03_bea_25.png",
				position: "top-[-5%] right-[10%] w-1/3 rotate-[18deg]",
				name: "/img/items/03_bea_24.png",
				img: "/img/items/03_bea_26.png",
				btnClr: "bg-btn-blue",
				link: "https://item.rakuten.co.jp/oga22i/h00106701/",
				next: "",
				exp: "/img/items/03_bea_27.png"
			},
			{
				bar: "",
				clockBg: "bg-blue h-[8.5rem] 2s:h-[14rem]",
				clock: "/img/items/clock21.png",
				sub: "/img/items/sub21.png",
				pack: "/img/items/03_bea_29.png",
				position: "top-[0] right-[4%] w-1/3 rotate-[5deg]",
				name: "/img/items/03_bea_30.png",
				img: "/img/items/03_bea_32.png",
				btnClr: "bg-btn-blue",
				link: "https://item.rakuten.co.jp/oga22i/h00019901/",
				next: "",
				exp: "/img/items/03_bea_33.png"
			}
		]
	},
])
</script>
