export class Image {
    private id: string;
    private owner: string;
    private secret: string;
    private farm: number;
    private server: string;
    private title: string;
    private url: string;

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $owner
     * @return {string}
     */
	public get $owner(): string {
		return this.owner;
	}

    /**
     * Getter $secret
     * @return {string}
     */
	public get $secret(): string {
		return this.secret;
	}

    /**
     * Getter $farm
     * @return {number}
     */
	public get $farm(): number {
		return this.farm;
	}

    /**
     * Getter $server
     * @return {string}
     */
	public get $server(): string {
		return this.server;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $owner
     * @param {string} value
     */
	public set $owner(value: string) {
		this.owner = value;
	}

    /**
     * Setter $secret
     * @param {string} value
     */
	public set $secret(value: string) {
		this.secret = value;
	}

    /**
     * Setter $farm
     * @param {number} value
     */
	public set $farm(value: number) {
		this.farm = value;
	}

    /**
     * Setter $server
     * @param {string} value
     */
	public set $server(value: string) {
		this.server = value;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
    }
    
    /**
     * Getter $url
     * @return {string}
     */
	public get $url(): string {
		return "https://farm"+ this.$farm +".staticflickr.com/"+ this.$server +"/"+ this.$id +"_"+ this.$secret +".jpg"
	}

    /**
     * Setter $url
     * @param {string} value
     */
	public set $url(value: string) {
		this.url = value;
	}
    
}